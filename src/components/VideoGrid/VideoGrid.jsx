import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ReactSession } from 'react-client-session';

import "./video-grid.css";
const data = [
    {
        thumbnail: 'https://source.unsplash.com/290x163/?new&zealand',

        title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',
    },
    {
        thumbnail: 'https://source.unsplash.com/290x163/?new&zealand',

        title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',

    },
    {
        thumbnail: 'https://source.unsplash.com/290x163/?new&zealand',

        title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',

    },
    {
        thumbnail: 'https://source.unsplash.com/290x163/?new&zealand',

        title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',

    },
    {
        thumbnail: 'https://source.unsplash.com/290x163/?new&zealand',

        title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',

    }
    ,
    {
        thumbnail: 'https://source.unsplash.com/290x163/?new&zealand',

        title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',

    },
    {
        thumbnail: 'https://source.unsplash.com/290x163/?new&zealand',

        title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',

    },
    {
        thumbnail: 'https://source.unsplash.com/290x163/?new&zealand',

        title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',

    },
    {
        thumbnail: 'https://source.unsplash.com/290x163/?new&zealand',

        title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',

    },
    {
        thumbnail: 'https://source.unsplash.com/290x163/?new&zealand',

        title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',

    }
    ,
    {
        thumbnail: 'https://source.unsplash.com/290x163/?new&zealand',

        title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',

    },
    {
        thumbnail: 'https://source.unsplash.com/290x163/?new&zealand',

        title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',

    },
    {
        thumbnail: 'https://source.unsplash.com/290x163/?new&zealand',

        title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',

    },
    {
        thumbnail: 'https://source.unsplash.com/290x163/?new&zealand',

        title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',

    },
    {
        thumbnail: 'https://source.unsplash.com/290x163/?new&zealand',

        title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',

    }
    ,
    {
        thumbnail: 'https://source.unsplash.com/290x163/?new&zealand',

        title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',

    },
    {
        thumbnail: 'https://source.unsplash.com/290x163/?new&zealand',

        title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',

    },
    {
        thumbnail: 'https://source.unsplash.com/290x163/?new&zealand',

        title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',

    },
    {
        thumbnail: 'https://source.unsplash.com/290x163/?new&zealand',

        title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',

    },
    {
        thumbnail: 'https://source.unsplash.com/290x163/?new&zealand',

        title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',

    }
    ,
    {
        thumbnail: 'https://source.unsplash.com/290x163/?new&zealand',

        title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',

    },
    {
        thumbnail: 'https://source.unsplash.com/290x163/?new&zealand',

        title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',

    },
    {
        thumbnail: 'https://source.unsplash.com/290x163/?new&zealand',

        title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',

    },
    {
        thumbnail: 'https://source.unsplash.com/290x163/?new&zealand',

        title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',

    },
    {
        thumbnail: 'https://source.unsplash.com/290x163/?new&zealand',

        title: 'Home - Day30 - Journey | 30 Days of Yoga With XMASS',

    }
]
export default class VideoGrid extends Component {

    componentDidMount = () => {
        console.log('test')
    }

    renderVideo = (video) => {
        const { isSmall } = this.props;

        return (
            <Link className="text-link" to={"/watch/" + video.title}>
                <div class="video" >
                    <p class="animate-text">Description Description Description Description Description</p>
                    <img class="thumbnail" src={video.thumbnail} alt="" />

                    {!isSmall && <>

                        <h6 class="title">{video.title}</h6>

                    </>}
                    {!!isSmall && <div>
                        <h6 class="title">{video.title}</h6>

                    </div>}


                </div>
            </Link>)
    }
    render() {
        const { headerTitle, isSmall } = this.props;


        return (
            <section class={`videos ${isSmall ? 'small-mode' : ''}`}>
                {headerTitle && <h2>{headerTitle} {ReactSession.get("username")} </h2>}

                {data.map(this.renderVideo)}
            </section>
        );
    }
}
