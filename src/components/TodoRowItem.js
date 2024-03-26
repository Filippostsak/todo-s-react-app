function TodoRowItem(props) {
  // Handler to confirm before deletion
  const handleDeleteClick = () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this todo?"
    );
    if (isConfirmed) {
      props.deleteTodo(props.rowNumber);
    }
  };

  return (
    <tr>
      <th scope="row">{props.rowNumber}</th>
      <td>{props.rowDescription}</td>
      <td>{props.rowAssigned}</td>
      <td>
        <button onClick={handleDeleteClick} className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
}
export default TodoRowItem;
