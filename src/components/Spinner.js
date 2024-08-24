function Spinner(){
    return(
        <div className="flex flex-col justify-center items-center gap-y-2">
            <div className="spinner"></div>
            <p className="font-bold">Loading...</p>
        </div>
    );
}
export default Spinner;