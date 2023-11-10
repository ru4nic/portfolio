import { motion } from 'framer-motion';
// import { AnimatePresence } from 'framer-motion';

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};
type AnimatedPageProps = {
  children?: React.ReactNode;
};
const AnimatedPage = ({ children }: AnimatedPageProps) => {
  return (
    // <AnimatePresence mode="sync">
    <motion.div
      className="main"
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
    // </AnimatePresence>
  );
};

export default AnimatedPage;
