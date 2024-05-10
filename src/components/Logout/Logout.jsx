import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations.js';
import { Button } from '@mui/material';

function Logout() {
  const dispatch = useDispatch();
  return (
    <>
      <Button
        sx={{ color: 'black', fontSize: '20px', ':hover': { color: 'red' } }}
        size="small"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        log Out
      </Button>
    </>
  );
}

export default Logout;