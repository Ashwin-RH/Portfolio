import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TypewriterText = () => {
  const messages = [
    "A front-end developer",
    "who loves turning designs into fast, ",
    " modern UIs with React and Tailwind.",
  ];

  const [currentText, setCurrentText] = useState("");
  const [msgIndex, setMsgIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentMessage = messages[msgIndex];

    const typingSpeed = isDeleting ? 40 : 100;

    const timeout = setTimeout(() => {
      setCurrentText((prev) =>
        isDeleting
          ? currentMessage.substring(0, prev.length - 1)
          : currentMessage.substring(0, prev.length + 1)
      );

      // When finished typing
      if (!isDeleting && currentText === currentMessage) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      // When finished deleting
      if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setMsgIndex((prev) => (prev + 1) % messages.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, msgIndex, messages]);

  return (
    <motion.h1
      className="text-xl md:text-2xl font-semibold text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {currentText}
      <motion.span
        className="inline-block ml-1 w-1 h-6 bg-gradient-to-r from-orange-500 to-purple-500"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
      />
    </motion.h1>
  );
};

export default TypewriterText;
