import { useEffect, useState } from "react";

export default function WhatsAppButton() {
  const [bounce, setBounce] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBounce(true);
      setTimeout(() => setBounce(false), 800);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <a
      href="https://wa.me/94776882493"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white rounded-full shadow-lg px-4 py-3 transition-transform duration-300 hover:scale-105 hover:shadow-xl ${bounce ? "animate-bounce" : ""}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="white"
        className="w-6 h-6 shrink-0"
      >
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.825.736 5.476 2.027 7.774L0 32l8.476-2.003A15.938 15.938 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 01-6.77-1.852l-.486-.29-5.03 1.188 1.215-4.904-.318-.504A13.27 13.27 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.29-9.862c-.4-.2-2.364-1.166-2.73-1.3-.366-.133-.633-.2-.9.2-.266.4-1.033 1.3-1.266 1.566-.233.267-.467.3-.867.1-.4-.2-1.688-.622-3.216-1.984-1.188-1.06-1.99-2.368-2.223-2.768-.233-.4-.025-.616.175-.815.18-.18.4-.467.6-.7.2-.233.267-.4.4-.666.133-.267.067-.5-.033-.7-.1-.2-.9-2.167-1.233-2.967-.325-.78-.655-.674-.9-.686l-.766-.013c-.267 0-.7.1-1.067.5-.366.4-1.4 1.367-1.4 3.333s1.433 3.867 1.633 4.133c.2.267 2.82 4.3 6.833 6.033.955.412 1.7.658 2.28.842.958.305 1.83.262 2.52.159.768-.115 2.364-.967 2.697-1.9.333-.934.333-1.734.233-1.9-.1-.167-.367-.267-.767-.467z" />
      </svg>
      <span className="text-sm font-semibold whitespace-nowrap">Chat with us</span>
    </a>
  );
}
