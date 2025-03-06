import Header from "../../components/Main/Home/Header/Header";
import Description from "../../components/Main/Home/Main/Description/Description";
import Tests from "../../components/Main/Home/Main/Tests/Tests";
import Navbar from "../../components/Main/Home/Menu/Navbar/Navbar";
import MediaMenu from "../../components/Main/Home/Menu/MediaMenu/MediaMenu";

interface HomePageProps {
  isOpen: boolean;
  onSwitchMenu: () => void;
}
export default function HomePage({ isOpen, onSwitchMenu }: HomePageProps) {
  return (
    <>
      <Navbar onSwitchMenu={onSwitchMenu} />
      <MediaMenu isOpen={isOpen} onSwitchMenu={onSwitchMenu} />
      <Header isOpen={isOpen} />

      <Description />

      <Tests />
    </>
  );
}
