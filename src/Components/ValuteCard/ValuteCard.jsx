import { useEffect, useState } from 'react';
import { Box, Button, Typography, Card, IconButton } from "@mui/material";
import FlipCameraAndroidIcon from '@mui/icons-material/FlipCameraAndroid';
import NorthIcon from '@mui/icons-material/North';

const ValuteCard = ({ item }) => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [changed, setChanged] = useState(false);
    const [exchangeRate, setExchangeRate] = useState(0); 

    useEffect(() => {
        changeValute();
    }, [changed, item]);

    const handleChangeValutes = () => {
        setChanged(!changed);
    }

    const changeValute = () => {
        if (item) {
            if (changed) {
                setFrom('1 RUB');
                setTo(`${(1 / (item.Value / item.Nominal)).toFixed(4)} ${item.CharCode}`);
                setExchangeRate(1 / (item.Value / item.Nominal) - 1 / (item.Previous / item.Nominal));
            } else {
                setFrom(`1 ${item.CharCode}`);
                setTo(`${(item.Value / item.Nominal).toFixed(4)} RUB`);
                setExchangeRate((item.Value - item.Previous) / item.Nominal);
            }
        }
    }

    return (
        <Box className='valute'>
            <Typography variant={'h6'} className='vtitle'>{item ? item.Name : ''}</Typography>
            <Card className='vcard'>
                <Typography className='nominal'>{from}</Typography>
                <Button onClick={handleChangeValutes} className='button'><FlipCameraAndroidIcon /></Button>
                <Typography className='value'>{to}</Typography>
                <IconButton
                    disabled
                    style={{
                        transform: exchangeRate.toFixed(3) > 0 ? 'rotate(0deg)' : 'rotate(180deg)',
                        color: exchangeRate.toFixed(3) > 0 ? 'green' : 'red'
                    }}>
                    <NorthIcon />
                </IconButton>
                <span
                    style={{
                        color: exchangeRate.toFixed(3) > 0 ? 'green' : 'red'
                    }}
                >
                    {exchangeRate.toFixed(3)}
                </span>
            </Card>
        </Box>
    );
};

export default ValuteCard;
