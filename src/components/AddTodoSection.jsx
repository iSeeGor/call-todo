const AddTodoSection = () => {

    return (
        <>
            <section className="app-section">
                <header className="app-section__header">
                    <h2 className="app-section__title">Add Call</h2>
                </header>

                <div className="add-call">
                    <div className="add-call__body">
                        <input className="form-control" type="text" placeholder="Name"/>

                        <input className="form-control" type="text" placeholder="Phone"/>

                        <input className="form-control" type="text" placeholder="Time"/>
                    </div>

                    <div className="add-call__footer">
                        <button type="button" className="button">Add Call</button>
                    </div>
                </div>
            </section>
        </>
    )
};

export default AddTodoSection;