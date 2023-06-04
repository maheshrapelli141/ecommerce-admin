import { Button, Card, Grid, styled, useTheme } from '@mui/material';
import { Fragment } from 'react';
import { H2 } from 'app/components/Typography';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect } from 'react';
import { getCountries } from 'app/services/countryService';
import { useDispatch } from 'react-redux';
import { setCountriesAction } from 'redux/actions/countriesActions';
import { useState } from 'react';
import QuickFilteringGrid from 'app/components/QuickFilteringGrid/QuickFilteringGrid';
import CountryDialog from './CountryDialog';

const ContentBox = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: { margin: '16px' },
}));

const Title = styled('span')(() => ({
    fontSize: '1rem',
    fontWeight: '500',
    marginRight: '.5rem',
    textTransform: 'capitalize',
}));

const SubTitle = styled('span')(({ theme }) => ({
    fontSize: '0.875rem',
    color: theme.palette.text.secondary,
}));

const H4 = styled('h4')(({ theme }) => ({
    fontSize: '1rem',
    fontWeight: '500',
    marginBottom: '16px',
    textTransform: 'capitalize',
    color: theme.palette.text.secondary,
}));

const rows = [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
];

const columns = [
    { field: 'emoji', headerName: 'emoji', width: 300 },
    { field: 'name', headerName: 'name', width: 300 },
    { field: 'phonecode', headerName: 'phonecode', width: 200 },
    { field: 'iso2', headerName: 'iso2', width: 150 },
    { field: 'current', headerName: 'current', width: 150 },
    { field: 'is_active', headerName: 'is_active', width: 150 },
];


const Countries = () => {
    const dispatch = useDispatch();
    const { palette } = useTheme();
    const [rows, setRows] = useState([]);
    const [open, setOpen] = useState(false);


    useEffect(() => {
        getCountries()
            .then(res => {
                // dispatch(setCountriesAction(res.data.result))
                setRows(res.data.results)
            })
            .catch(err => {
                console.log({ err });
            })
    }, []);

    return (
        <Fragment>
            <ContentBox className="countries">
                <H2>Countries</H2>
                <br />
                <br />
                <div>
                    <Button variant="contained" color="primary" style={{ 'float': 'right' }} onClick={() => setOpen(true)}>
                        Add
                    </Button>
                </div>
                <div style={{ clear: 'both' }}></div>
                <br />

                <div style={{ height: '70vh', width: '100%' }}>
                    {/* <DataGrid rows={rows} columns={columns} /> */}
                    <QuickFilteringGrid rows={rows} columns={columns} />
                </div>
            </ContentBox>
            <CountryDialog open={open} onClose={() => setOpen(false)} />
        </Fragment>
    );
};

export default Countries;
