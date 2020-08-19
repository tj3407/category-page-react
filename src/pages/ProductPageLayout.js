import React from 'react'
import { connect } from 'react-redux';
import { CATEGORY_PAGE_TITLE } from "../content/categories";
import Header from '../components/Header';
import { Grid } from '@material-ui/core';
import publicData from '../data/public.json';
import privateData from '../data/private.json';
import ProductCard from '../components/ProductCard';

function ProductPageLayout(props) {
    const [categoryItems, setCategoryItems] = React.useState(publicData.categories);

    React.useEffect(() => {
        if (props.status.isUserLoggedIn) {
            setCategoryItems(privateData.categories)
        } else {
            setCategoryItems(publicData.categories)
        }
    }, [props.status.isUserLoggedIn])

    return (
        <div>
            <Header />
            <h1>{CATEGORY_PAGE_TITLE}</h1>
            <Grid container justify="center">
                {categoryItems.map(category => {
                    return (
                        <ProductCard
                            key={category.id}
                            description={category.description}
                            image={category.image}
                        />
                    )
                })}
            </Grid>
        </div>
    )
}

const mapStateToProps = state => ({
    status: state.login,
})

export default connect(mapStateToProps)(ProductPageLayout);
