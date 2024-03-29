const Box = (props) => {
    //write your code here
    const {className, boxSizeText} = props;
    const containerClassName =`box-container ${className}`;

    return(
        <div className={containerClassName}>
            <div className="boxes">
                <p className="box-size">{boxSizeText}</p>
                
            </div>
        </div>
    );
};

const element = (
    //write your code here
    <div className ="bg-container">
        <h1 className="title">Boxes</h1>
        <div className="box-sizes">
            <Box className="small-box" boxSizeText="Small"/>
            <Box className="medium-box" boxSizeText="Medium"/>
            <Box className="large-box" boxSizeText ="Large"/>
        </div>
    </div>
);
ReactDOM.render(element,document.getElementById("root"));
