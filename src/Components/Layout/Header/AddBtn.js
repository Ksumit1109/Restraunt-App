import './Addbtn.css'
const AddBtn = () => {
    return (
        <form>
            <div className='form-group d-flex'>
                <button
                    type="button"
                    className="addbtn btn btn-dark"
                >
                    + Add
                </button>
            </div>
        </form>
    );
};

export default AddBtn;