import Example from "./examples/Example-1";
import NavBar from "./sections/NavBarSection";
import OverviewSection from "./sections/OverviewSection";
import TransactionSection from "./sections/TransactionSection";

function App() {
  return (
    <>
      <NavBar />
      <Example />
      {/* <OverviewSection />
      <TransactionSection /> */}
    </>
  );
}

export default App;
