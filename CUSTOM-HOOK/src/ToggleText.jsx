import useToggle from "./hooks/useToggle";

function ToggleText() {

    const [ isOpen, toggleOpen ] = useToggle();
    const [ isTest, toggleTest ] = useToggle();

    return (
        <div>
            {/* <button onClick={toggleOpen}>Toggle</button>
            { isOpen && <p>Hello, this is visible!</p>} */}

            <div>
                <button onClick={toggleOpen}>Toggle</button>
                { isOpen && <p>Hello, this is visible!</p>}
            </div>
            <div>
                <button onClick={toggleTest}>Toggle Text</button>
                { isTest && <p>Hello, this is Nimra Jahangir!</p>}
            </div>
        </div>
    )

}

export default ToggleText