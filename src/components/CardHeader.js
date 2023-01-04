const CardHeader = ({ defConf, setDefConf }) => {
  const handleFilter = (e) => {
    let selected;
    if (e.currentTarget.value === "all") selected = e.currentTarget.value;
    else if (e.currentTarget.value === "true") selected = true;
    else selected = false;
    setDefConf({
      ...defConf,
      filter: selected,
    });
  };

  return (
    <h5 className="card-header mt-3">
      Task
      <select style={{ width: 125 }} className="form-select form-select-sm float-end" value={defConf.filter} onChange={handleFilter}>
        <option value="all">All</option>
        <option value="false">Active</option>
        <option value="true">Completed</option>
      </select>
    </h5>
  );
};

export default CardHeader;
