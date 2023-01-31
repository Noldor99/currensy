import { Autocomplete, TextField } from "@mui/material";

const InputSymbol = ({ Rate, setRate, options }) => {
  return (
    <>
    <Autocomplete
      isOptionEqualToValue={(option, value) => option.id === value.id}
      value={Rate}
      inputValue={Rate}
      onInputChange={(event, newInputValue) => {
        setRate(newInputValue.toUpperCase());
      }}
      id="free-solo-demo"
      options={options}
      sx={{
        width: 120,
        borderColor: "primary.main",
        ".MuiSvgIcon-root": {
          color: "orange",
          
        },
 
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "orange",
          },
        },
      }}
      renderInput={(params) => (
        <TextField {...params} />
      )}
    />
 
    </>
  );
};

export default InputSymbol;
