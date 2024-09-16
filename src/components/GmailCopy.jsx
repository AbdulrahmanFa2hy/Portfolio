import { toast } from "react-toastify";

const GmailCopy = () => {
  const gmailAddress = "abdelrhamn.fa2hy@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(gmailAddress)
      .then(() => {
        toast("Copied.");
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  };

  return (
    <div
      className="cursor-pointer text-[.85rem] sm:text-[1rem]"
      onClick={copyToClipboard}
    >
      {gmailAddress}
    </div>
  );
};

export default GmailCopy;
