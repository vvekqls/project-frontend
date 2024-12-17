import Image from "next/image";

const EmptyState: React.FC = () => (
  <div className="w-full text-center m-8 text-gray border-t rounded mx-auto">
    <Image
      className="m-auto mt-14"
      width={56}
      height={56}
      priority
      src={"/Clipboard.svg"}
      alt="Clipboard"
    />
    <p className="font-bold my-6">You don’t have any tasks registered yet.</p>
    <p className="font-normal">Create tasks and organize your to-do items.</p>
  </div>
);

export default EmptyState;
