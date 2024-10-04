export default function Post({children,name,text}){
    return(
        <div style={{
            padding:'5px', border:'3px solid darkcyan', marginBottom:'20px'
        }}>
            <h1>{name}</h1>
            <h4>{children}</h4>
            <hr/>
            <p>{text}</p>
        </div>
    );
}