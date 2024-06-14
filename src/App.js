import "bootstrap/dist/css/bootstrap.css";
import IndexNav from "./page/nav_all";
import Client from "./page/pro_det";
import Ourservies from "./page/Ourservies/servies";
import Port from "./page/Portfolio/port";
import Team from "./page/Portfolio/team";
import FreCont from "./page/freqently/freCont";
import Foot from "./page/footer/footer";
import Index from "./page/page";

function App() {
  return (
    <>
      <IndexNav />
      <Index />
      <Client />
      <Ourservies />
      <Port />
      <Team />
      <FreCont />
      <Foot />
    </>
  );
}

export default App;
