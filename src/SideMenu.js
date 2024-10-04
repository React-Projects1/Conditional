import Button from  './Button';
export default function SideMenu(){
    return(
        <div style={{
             padding:'5px', border:'3px solid darkcyan',width:'20%',
        }}>
            <Button name="btn1">
                <span style={{marginLeft:'5px'}}>⭐⭐⭐</span>

            </Button>
            <Button name="btn2"></Button>
            <Button name="btn3">
            <span>🌟🌟🌟</span>
            </Button>
            <Button></Button>
        </div>
    );
}