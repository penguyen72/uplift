'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Progress } from '@/components/ui/progress';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import { toast } from '@/components/ui/use-toast';

export default function Page() {
  const [clicked, setClicked] = useState(false);
  const [timeUp, setTimeUp] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [list, setList] = useState<string[]>([]);
  const router = useRouter();
  const mainControls = useAnimation();
  const { width, height } = useWindowSize();

  const containerVariants = {
    visible: {
      scale: [1, 2, 2, 1, 5, 5, 5, 1, 2, 2, 0],
      rotate: [0, 0, 270, 270, 0, 0, 0, 270, 270, 0, 0],
      borderRadius: [
        '20%',
        '20%',
        '50%',
        '50%',
        '20%',
        '20%',
        '20%',
        '50%',
        '50%',
        '20%',
        '20%',
      ],
      transition: {
        duration: 4,
      },
    },
  };

  const renderTime = ({ remainingTime }: { remainingTime: number }) => {
    if (remainingTime === 0 || timeUp) {
      setTimeUp(true);
      return <p className="text-gray-400">Times Up!</p>;
    }

    return (
      <div className="flex flex-col items-center justify-center">
        <p className="text-gray-400 font-delius">Remaining</p>
        <p className="text-3xl font-delius">{remainingTime}</p>
        <p className="text-gray-400 font-delius">seconds</p>
      </div>
    );
  };

  useEffect(() => {
    getReflectionQuestions();
  }, []);

  const getReflectionQuestions = async () => {
    try {
      const response = await axios.post('/api/reflection');
      setList(JSON.parse(response.data.content));
    } catch (error) {
      toast({
        title: 'Error Occurred!',
        description:
          'We could not get your reflection questions. Please reload the page!',
      });
    }
  };

  const handleClick = () => {
    mainControls.start('visible');
    setClicked(true);
  };

  const handleNext = () => {
    if (currentStep >= 4) {
      setCurrentStep(5);
      setTimeUp(true);
    } else {
      setCurrentStep((prevValue) => {
        return prevValue + 1;
      });
    }
  };

  return (
    <div className="bg-[#FFEEE2] w-screen h-[calc(100vh-56px)] flex items-center justify-center relative">
      {timeUp && currentStep === 5 ? (
        <Confetti width={width} height={height} />
      ) : null}
      <motion.div
        className="bg-[#D9D9D9] flex flex-col items-center justify-center gap-2 absolute z-10"
        variants={containerVariants}
        initial={{ width: 300, height: 300, borderRadius: '50%' }}
        animate={mainControls}
      >
        {!clicked ? (
          <Fragment>
            <motion.p
              className="text-[#000000] font-delius flex text-4xl"
              exit={{ opacity: 0 }}
              transition={{ duration: 4 }}
            >
              Mindful Minutes
            </motion.p>
            <motion.button
              className="bg-[#6F9FE7] hover:bg-[#448FFF] text-black font-delius text-lg h-8 w-[100px] border-black border-2 border-solid rounded-[20px]"
              onClick={handleClick}
              exit={{ opacity: 0 }}
              transition={{ duration: 4 }}
            >
              Begin
            </motion.button>
          </Fragment>
        ) : null}
      </motion.div>
      <AnimatePresence>
        {clicked && (
          <motion.div
            className="absolute flex flex-col gap-10 w-[60%]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 4 }}
          >
            <div className="mx-auto">
              <CountdownCircleTimer
                isPlaying={clicked && !timeUp}
                duration={304}
                colors={['#00C04B', '#F7B801', '#A30000', '#A30000']}
                colorsTime={[10, 6, 3, 0]}
                onComplete={() => ({ delay: 1 })}
              >
                {renderTime}
              </CountdownCircleTimer>
            </div>
            <motion.p
              className="text-4xl text-center font-delius"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
            >
              {list[currentStep]}
            </motion.p>
            <span className="flex items-center gap-2">
              <Progress value={currentStep * 20} />
              <p className="font-delius">{currentStep * 20}%</p>
            </span>
            {timeUp && currentStep === 5 ? (
              <Button
                className="bg-[#6F9FE7] hover:bg-[#448FFF] text-black font-delius text-2xl h-10 w-[150px] mx-auto border-black border-2 border-solid rounded-3xl"
                onClick={() => router.push('/')}
              >
                Go Back
              </Button>
            ) : timeUp ? (
              <Button
                className="bg-[#6F9FE7] hover:bg-[#448FFF] text-black font-delius text-2xl h-10 w-[150px] mx-auto border-black border-2 border-solid rounded-3xl"
                onClick={() => router.push('/')}
              >
                Go Back
              </Button>
            ) : (
              <Button
                className="bg-[#6F9FE7] hover:bg-[#448FFF] text-black font-delius text-2xl h-10 w-[150px] mx-auto border-black border-2 border-solid rounded-3xl"
                onClick={handleNext}
              >
                Next
              </Button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
