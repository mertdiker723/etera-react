import { Button, Card, CardActions, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { useDataState, useDataDispatch } from '../../../../screen/Home/HomeContext';


const SortBy = () => {
    const { radioSortBy } = useDataState();
    const dispatch = useDataDispatch();

    const radioHandleChange = (event: React.ChangeEvent<HTMLInputElement>, value: string) => {
        dispatch({ type: "SORT_RADIO", payload: { radioSortBy: value } })
    }

    return (
        <Card>
            <CardContent>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Sort By</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                        value={radioSortBy || ""}
                        onChange={radioHandleChange}
                    >
                        <FormControlLabel value="oldToNew" control={<Radio />} label="Old to new" />
                        <FormControlLabel value="newToOld" control={<Radio />} label="New to old" />
                        <FormControlLabel value="priceHighToLow" control={<Radio />} label="Price high to low" />
                        <FormControlLabel value="priceLowToHigh" control={<Radio />} label="Price low to high" />
                    </RadioGroup>
                </FormControl>
            </CardContent>
            {
                radioSortBy && <CardActions>
                    <Button onClick={() => dispatch({ type: "SORT_RADIO", payload: { radioSortBy: "" } })} size="small">Clear</Button>
                </CardActions>
            }

        </Card>
    )
}

export default SortBy