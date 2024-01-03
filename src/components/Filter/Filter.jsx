import { getFilter, setFilter } from '../../redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </div>
  );
};

export default Filter;
