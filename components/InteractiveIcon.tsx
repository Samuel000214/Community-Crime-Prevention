import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

interface InteractiveIconProps {
  icon: LucideIcon;
  tooltip: string;
  color: string;
  delay?: number;
}

export function InteractiveIcon({ icon: Icon, tooltip, color, delay = 0 }: InteractiveIconProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay, duration: 0.5, type: "spring" }}
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="cursor-pointer p-4 rounded-full shadow-lg"
            style={{ backgroundColor: color }}
          >
            <Icon className="w-8 h-8 text-white" />
          </motion.div>
        </TooltipTrigger>
        <TooltipContent>
          <p className="max-w-xs">{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
