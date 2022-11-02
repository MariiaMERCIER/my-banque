import "./App.css";
import image from "./assets/images/iconUser.png";
import logo from "./assets/images/logo-bank.png";
import data from "./bank.json";

const App = () => {
  return (
    <>
      <header>
        <div className="conteiner">
          <div className="bank">
            <img class={"logo"} src={logo} alt="logo-banque" />
            <h1>My Bank</h1>
          </div>
          <div className="user">
            <p className="userName">Etienne</p>
            <img className="iconUser" src={image} alt="iconUser" />
          </div>
        </div>
      </header>
      <body>
        <div className="conteinerTableaux">
          {data.map((elem, index) => {
            console.log(elem.color);
            return (
              <>
                <dev className="tableauEnTete" key={index}>
                  <ul className={elem.color === "#c2185b" ? "rose" : "blue"}>
                    <span className="name">{elem.name}</span>
                    <span className="balance">{elem.balance}</span>
                  </ul>
                </dev>
                {/* {console.log(elem.operations[0])} */}
                {elem.operations.map((elem, index) => {
                  return (
                    <dev key={index} className="tableau">
                      <ul>
                        <span className="date">{elem.date}</span>
                        <span className="description">{elem.description}</span>
                        <span className="amount">{elem.amount}</span>
                      </ul>
                    </dev>
                  );
                })}
                <div className="button">
                  <button>SEE MORE</button>
                </div>
              </>
            );
          })}
        </div>
      </body>
    </>
  );
};

export default App;
