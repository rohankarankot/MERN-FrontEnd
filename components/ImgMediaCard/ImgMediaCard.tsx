import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function ImgMediaCard({ name, description, price, category }: any) {
    return (
        <Card sx={{ minWidth: 250, margin: "20px" }}>
            <div style={{ cursor: "pointer" }} onClick={() => alert("came")}>
                <img
                    alt="green iguana"
                    height="200"
                    width="100%"
                    src="https://images.unsplash.com/photo-1534706936160-d5ee67737249?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                />
                <CardContent>
                    <Typography sx={{ borderBottom: "0.5px solid" }}  >
                        {name}
                    </Typography>

                    <Typography color="text.secondary" sx={{ borderBottom: "0.5px solid" }} >
                        {description}
                    </Typography>
                    <Typography color="text.secondary">
                        ₹ {price}
                    </Typography>
                </CardContent>
            </div>
            <CardActions sx={{ display: "flex", justifyContent: "space-around" }}>
                <Button size="small" onClick={() => alert("add to cart")}><AddShoppingCartIcon /></Button>
                <Button size="small" onClick={() => alert("add to favourite")}><FavoriteIcon /></Button>
            </CardActions>
        </Card>
    );
}