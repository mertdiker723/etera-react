import { useMemo, useState } from 'react';

import { Card, CardActions, CardContent, Button, FormGroup, FormControl, FormLabel, FormControlLabel, Checkbox, FormHelperText } from '@mui/material';
import { InitialContext, useDataState } from '../../../../screen/Home/HomeContext';


const Model = () => {
    const { state } = useDataState() as InitialContext;
    const { productListing } = state;

    const memoModel = useMemo(() => Array.from(new Set(productListing.map((item) => item.model))), [productListing])

    const [, setStateCheckBox] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStateCheckBox(event.target.name)
    };

    return (
        <Card sx={{ mt: 4 }}>
            <CardContent sx={{ height: "200px", overflowY: "auto", mb: 4 }}>
                <FormControl component="fieldset" variant="standard">
                    <FormLabel component="legend">Model</FormLabel>
                    <FormGroup>
                        {
                            memoModel.map((item, index) => {
                                return <FormControlLabel
                                    key={index}
                                    control={
                                        <Checkbox onChange={handleChange} name={item} />
                                    }
                                    label={item}
                                />
                            })
                        }
                    </FormGroup>
                </FormControl>
            </CardContent>
        </Card>
    )
}

export default Model