import React from 'react';
import { Swords, Trophy, Ban } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import { ResultStyleProps } from '@/types/game';
import { getResultStyles } from './Result.Styles';

export interface ResultIconProps extends ResultStyleProps {
  className?: string;
}

export const ResultIcon: React.FC<ResultIconProps> = ({ resultType, className }) => {
  const getIcon = () => {
    switch (resultType) {
      case 'win':
        return Trophy;
      case 'lose':
        return Ban;
      default:
        return Swords;
    }
  };

  const Icon = getIcon();
  const styles = getResultStyles(resultType);

  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ 
        scale: 1, 
        opacity: 1,
        rotate: [0, -10, 10, -10, 0]
      }}
      transition={{ 
        duration: 0.5,
        times: [0, 0.25, 0.5, 0.75, 1],
        delay: 0.2
      }}
    >
      <Icon className={cn("w-6 h-6", styles.icon, className)} aria-hidden="true" />
    </motion.div>
  );
};