import ItemList from "./ItemList";

function FragmentWithList() {
    return (
        <>
            <h2>tem List</h2>
            <ItemList />
            <p>Total: {ItemList.length} items</p>
        </>
    );
}

export default FragmentWithList;