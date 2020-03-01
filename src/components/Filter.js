import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { GlobalContext } from '../context/GlobalState';

const useStyles = makeStyles(theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    color: 'inherit'
  },
}));

export default function Filter() {

  const globalContext =  useContext(GlobalContext);
  const {filterCountry} = globalContext;
  const classes = useStyles();
  const [region, setRegion] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = event => {
      console.log(event.target.value);
      
    setRegion(event.target.value);
    filterCountry(event.target.value)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className='margin-left-home mr-5'>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label color-code">Region</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select color-code"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={region}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Filter by Region</em>
          </MenuItem>
          <MenuItem value={'all'}>All</MenuItem>
          <MenuItem value={'africa'}>Africa</MenuItem>
          <MenuItem value={'america'}>America</MenuItem>
          <MenuItem value={'asia'}>Asia</MenuItem>
          <MenuItem value={'europe'}>Europe</MenuItem>
          <MenuItem value={'oceania'}>Oceania</MenuItem>

        </Select>
      </FormControl>
    </div>
  );
}