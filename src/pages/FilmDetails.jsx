import SingleItemHeader from "../components/FilmDetails/SingleItemHeader";
import SingleItemTabs from "../components/FilmDetails/SingleItemTabs";
import ActorItem from "../components/FilmDetails/ActorItem";
function FilmDetails() {
  return (
    <>
      <SingleItemHeader />
      <SingleItemTabs />
      <ActorItem />
    </>
  );
}
export default FilmDetails;
