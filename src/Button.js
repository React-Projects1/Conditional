import './Button.css'
// export default function Button({name, children}) {
//   if(name == null || name == ""){
//     return null;
//   }
//   return (
//     <button>{name}{children}</button>
//   );
// }

export default function Button({name, children}) {

  return (
    <div>
    {name == null || name == "" ? (<div></div> ): ( <button>{name}{children}</button>)}

    </div>
  );
}

