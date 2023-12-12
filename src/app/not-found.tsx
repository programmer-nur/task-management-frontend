import Image from "next/image";
import errorImg from '../assets/error.img.png'
const NotFoundPage = () => {
  return (
    <div>
     <Image src={errorImg} fill alt="error Img" />
    </div>
  );
};

export default NotFoundPage;