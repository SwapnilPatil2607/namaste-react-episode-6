import { useState } from "react";

const Header = () => {
  const [buttonName, setButtonName] = useState("Login");
  // buttonName will be redeclared every time component re-render thats why we can use const
  // component will be re-render whenever useState function will be called
  // reconcialliation happen
  // and in real DOM only button name will change, so in DOM only button will be replaced but component is re-rendered
  console.log(
    "Component will be re-rendered on buttonName change and in DOM only button will be replaced because of reconcialliation"
  );

  // normal variable
  // let btnName = "Login";
  return (
    <div className="header">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqgqV9sezgYxiiPqaJ3NXXvwDbkzgXpCeBWQ&usqp=CAU" />
      <div>
        <ul>
          <li>Home</li>
          <li>contact</li>
          <li>about</li>
          <li>
            <button
              className="btn-class"
              onClick={() => {
                // toggle feature
                buttonName === "Login"
                  ? setButtonName("Logout")
                  : setButtonName("Login");

                // ---------
                // btnName = "Logout";
                // console.log(
                //   "btnName will be updated but UI wont update because reconcilliation is not triggered",
                //   btnName
                // );
              }}
            >
              {buttonName}
              {/* {btnName} */}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

//   default export (used for one export per file)
export default Header;
