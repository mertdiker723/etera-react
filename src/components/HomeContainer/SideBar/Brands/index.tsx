import { useState } from 'react';

import { Card, CardContent, FormGroup, FormControl, FormLabel, FormControlLabel, Checkbox } from '@mui/material';
import { useDataState } from '../../../../screen/Home/HomeContext';
import { useMemo } from 'react';


const Brands = () => {
    const { productListing } = useDataState();

    const memoBrands = useMemo(() => Array.from(new Set(productListing && productListing.map((item) => item.brand))), [productListing])

    const [, setStateCheckBox] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStateCheckBox(event.target.name)
    };


    return (
        <Card sx={{ mt: 4 }}>
            <CardContent sx={{ height: "200px", overflowY: "auto", mb: 4 }}>
                <FormControl component="fieldset" variant="standard">
                    <FormLabel component="legend">Brands</FormLabel>
                    <FormGroup>
                        {
                            memoBrands.map((item, index) => {
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

export default Brands