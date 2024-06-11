import React, { useEffect, useState } from 'react'
import './crud.css'
import axios, { Axios } from 'axios'

const Crud = () => {

    const [image, setImage] = useState()
    const [record, setRecord] = useState([])
    const id = Math.floor(Math.random() * 1000)


    const viewData = async () => {
        try {
            let { data } = await axios.get(`http://localhost:8000/user`)
            setRecord(data)

        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        viewData()
    }, [])

    const addData = async () => {
        try {

            let { data } = await axios.post(`http://localhost:8000/user`, {
                id: id,
                image: image

            })
            setRecord(data)
            viewData()
            setImage('')
        }
        catch (err) {
            console.log(err);
            return false
        }
    }

    const deleteRecord = async (id) => {
        try {
            let { data } = await axios.delete(`http://localhost:8000/user/${id}`)

            setRecord(data);
            viewData()

        } catch (err) {
            console.log(err);
        }
    }

    const editRecord = async (id) => {
        try {
            let { data } = await axios.put(`http://localhost:8000/user/${id}`)

            console.log(data);
        }
        catch (err) {
            console.log(err);
        }
    }


    console.log(record);




    return (
        <div>
            <nav>
                <div className="nav-left">
                    <img src="https://cdn.shopify.com/s/files/1/0702/0511/2635/files/logo.png" className="logo" />
                    <ul>
                        <li><img src="https://cdn.shopify.com/s/files/1/0702/0511/2635/files/notification.png " alt /></li>
                        <li><img src="https://cdn.shopify.com/s/files/1/0702/0511/2635/files/inbox.png" alt /></li>
                        <li><img src="https://cdn.shopify.com/s/files/1/0702/0511/2635/files/video.png" alt /></li>
                    </ul>
                </div>
                <div className="nav-right">
                    <div className="search-box">
                        <img src="https://cdn.shopify.com/s/files/1/0702/0511/2635/files/search.png" />
                        <input type="text" placeholder="search" />
                    </div>
                    <div className="nav-user-icon online" onclick="settingsmenutoggle()">
                        <img src="https://cdn.shopify.com/s/files/1/0702/0511/2635/files/Omar_Parawni.jpg?v=1703156151" />
                    </div>
                </div>
                {/* setting-menu-------- */}
                <div className="settings-menu">
                    <div id="dark-btn" className="dark-btn-on">
                        <span> </span>
                    </div>
                    <div className="settings-menu-inner">
                        <div className="user-profile">
                            <img src="https://cdn.shopify.com/s/files/1/0702/0511/2635/files/Omar_Parawni.jpg?v=1703156151" />
                            <div>
                                <p>Ahamd massi</p>
                                <a href="#">See youe profile</a>
                            </div>
                        </div>
                        <hr />
                        <div className="user-profile">
                            <img src="https://cdn.shopify.com/s/files/1/0702/0511/2635/files/feedback.png" />
                            <div>
                                <p>Give Feedback</p>
                                <a href="#"> Help Us to improve the news </a>
                            </div>
                        </div>
                        <hr />
                        <div className="settings-links">
                            <img src="https://cdn.shopify.com/s/files/1/0702/0511/2635/files/setting.png" className="settings-icon" />
                            <a href>Settings &amp; Privacy <img src="https://cdn.shopify.com/s/files/1/0702/0511/2635/files/arrow.png" width="10px" /></a>
                        </div>
                        <div className="settings-links">
                            <img src="https://cdn.shopify.com/s/files/1/0702/0511/2635/files/help.png" className="settings-icon" />
                            <a href>Help &amp; Support <img src="https://cdn.shopify.com/s/files/1/0702/0511/2635/files/arrow.png" width="10px" /></a>
                        </div>
                        <div className="settings-links">
                            <img src="https://cdn.shopify.com/s/files/1/0702/0511/2635/files/display.png" className="settings-icon" />
                            <a href>Display &amp; Accessibility <img src="https://cdn.shopify.com/s/files/1/0702/0511/2635/files/arrow.png" width="10px" /></a>
                        </div>
                        <div className="settings-links">
                            <img src="https://cdn.shopify.com/s/files/1/0702/0511/2635/files/logout.png" className="settings-icon" />
                            <a href>Logout<img src="https://cdn.shopify.com/s/files/1/0702/0511/2635/files/arrow.png" width="10px" /></a>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="container">
                {/* left-sidebar-------- */}
                <div className="left-sidebar">
                    <div className="imp-links">
                        <a href> <img src="https://cdn.shopify.com/s/files/1/0702/0511/2635/files/news.png" alt />massi news</a>
                        <a href> <img src="https://cdn.shopify.com/s/files/1/0702/0511/2635/files/friends.png" alt /> Friends </a>
                        <a href> <img src="https://cdn.shopify.com/s/files/1/0702/0511/2635/files/group.png" alt />Group</a>
                        <a href> <img src="https://cdn.shopify.com/s/files/1/0702/0511/2635/files/marketplace.png" alt />marketplace</a>
                        <a href>sea more</a>
                    </div>
                    <div className="shortcut-links">
                        <p>your shortcuts</p>
                        <a href> <img src="https://cdn.shopify.com/s/files/1/0702/0511/2635/files/shortcut-1.png" />web Devlopers</a>
                        <a href> <img src="https://cdn.shopify.com/s/files/1/0702/0511/2635/files/shortcut-2.png" />web desigh course</a>
                        <a href> <img src="https://cdn.shopify.com/s/files/1/0702/0511/2635/files/shortcut-3.png" />full stack Development</a>
                        <a href> <img src="https://cdn.shopify.com/s/files/1/0702/0511/2635/files/girl.jpg?v=1703158157" />web Experts</a>
                    </div>
                </div>
                {/* main-content-------- */}
                <div className="main-content">
                    <div className="story-gallery">
                        <div className="story story1">
                            <img src="https://cdn.shopify.com/s/files/1/0702/0511/2635/files/upload.png" />
                            <p>add story</p>
                        </div>
                        <div className="story story2">
                            <img src="https://cdn.shopify.com/s/files/1/0702/0511/2635/files/mula.jpg" />
                            <p>ansar sadiqi</p>
                        </div>
                        <div className="story story3">
                            <img src="https://cdn.shopify.com/s/files/1/0702/0511/2635/files/member-1.png" />
                            <p>ronaldo</p>
                        </div>
                        <div className="story story4">
                            <img src="https://cdn.shopify.com/s/files/1/0702/0511/2635/files/member-2.png" />
                            <p>crimbenzema</p>
                        </div>
                        <div className="story story5">
                            <img src="https://cdn.shopify.com/s/files/1/0702/0511/2635/files/Omar_Parawni.jpg?v=1703156151" />
                            <p>massoud ozil</p>
                        </div>
                    </div>
                    <div className="write-post-cotainer">
                        <div className="user-profile">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjo93rX2c0eNoAXB8sqjWWCNcjIw2X57wfoQ&s" />
                            <div><p>Jigar makwana</p>
                                <small>public<i className="fa-solid fa-sort-down" /></small>
                            </div>
                        </div>
                        <div className="post-input-container">
                            <textarea rows={3} placeholder="Add Image Url" defaultValue={""} onChange={(e) => setImage(e.target.value)} value={image} />
                            <div className="add-post-links">
                                <button onClick={() => addData()}>
                                    <a href> <img src="https://cdn.shopify.com/s/files/1/0702/0511/2635/files/photo.png" />Add Photo Url</a>
                                </button>
                            </div>

                        </div>
                    </div>
                    {
                        record.map && record.map((val) => {
                            return (
                                <div className="post-container">
                                    <div className="post-row">
                                        <div className="user-profile">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjo93rX2c0eNoAXB8sqjWWCNcjIw2X57wfoQ&s" />
                                            <div>
                                                <p>jigar makwana</p>
                                                <span> June 24 2023,11:31 AM</span>
                                            </div>
                                        </div>
                                        <a href><i className="fas fa-ellipsis-v" /></a>
                                    </div>
                                    <p className="post-text">Subscibe <span>@kabul</span> Kabul is the capital and largest city of Afghanistan,
                                        located in the eastern part of the country.
                                        It is a bustling metropolis with a rich history and cultural heritage.
                                        Here's a comprehensive overview of Kabul
                                        <a href>Capital</a>
                                        <a href>YoutubeChanel</a></p>
                                    <img width="100%" src={val.image} />
                                    <div className="post-row">
                                        <div className="activity-icons">
                                            <div><img src="https://cdn.shopify.com/s/files/1/0702/0511/2635/files/like-blue.png" />100k</div>
                                            <div><img src="https://cdn.shopify.com/s/files/1/0702/0511/2635/files/comments.png" />60k</div>
                                            <div><img src="https://cdn.shopify.com/s/files/1/0702/0511/2635/files/share.png" />23k</div>
                                        </div>
                                        <div className="post-profile-icon">
                                            <button onClick={() => deleteRecord(val.id)}><i className="fa-solid fa-trash-can delete"></i></button>
                                            <button onClick={() => editRecord(val.id)}><i className="fa-solid fa-pen-to-square edit"></i></button>

                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <button type="button" className="Load-More-btn">Load More</button>
                </div>
                &lt; !--right - sidebar-------- --&gt;
                <div className="right-sidebar">
                    <div className="sidebar-tittle">
                        <h4>Events</h4>
                        <a href>see all</a>
                    </div>
                    <div className="event">
                        <div className="left-event">
                            <h3>18</h3>
                            <span>march</span>
                        </div>
                        <div className="right-event">
                            <h4>social madia</h4>
                            <p><i className="fa-solid fa-location-dot" />willson tech park</p>
                            <a href>more info</a>
                        </div>
                    </div>
                    <div className="event">
                        <div className="left-event">
                            <h3>22</h3>
                            <span>june</span>
                        </div>
                        <div className="right-even">
                            <h4>Mobile markiten</h4>
                            <p><i className="fa-solid fa-location-dot" />willson tech park</p>
                            <a href>more info</a>
                        </div>
                    </div>
                    <div className="sidebar-tittle">
                        <h4>advertisement</h4>
                        <a href>close</a>
                    </div>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAk1BMVEUAAAAAljn////tLjgSEhISmkHz8/Pz+/cAmjn0LzoAmDnwKzjtJzLtLDbsHCn0Jzj95+j5v8FxFhupISjUKTLsEyPzgIUtiznUPTj4Ijg0CgxvFRo4Cw0tCAvvUFf0h4zvRk7sFybvTFOnWThxdDmsVjhsdjk4iDklBwk6FhcQJSTrqq3sABfyc3nstLLXOTgljTnTP6nVAAADoUlEQVR4nO2ciXrSQBRGU6/aJdC4tArutdZd6/s/nUkpAiHLzNyZRHLPeYJwvh5/SCZmzzNQcHrxdexLOGRE5NnY13DAlPpOCTgYqfxdvBr7Mg4VWUHAYdzrI+AwZO3v4u3Yl3KIyD/mBOzPRh8BByDb/lhgX2QXAvajpo+A/ZC6PwL2oa6PgL1o0EfA7jToI2B3mvSVvB77ug6EFn0E7EaLPgJ2o00fATvRoY+A++nQR8D9dOkj4F569BFwNz36yoDfjH2J/zN9+gi4Ewd9BNyOgz4eI7Xjok8k5yZWM276CLgFR30scDOu+oQFbsJDHwHv46GPBd7HR5/wGKmOpz4C3sVTHzexdvHVJyzwNgH6CHhDgD4WeEOIPmGB1wTqI+AVgfpY4BWh+oSAKxT6CFiljwXW6RMCVuqzHrBSn/WAtfrEdsAR9FkOOIK+MuBv3x+aJIo+yeXH8WOLxNEn86v3DywSSZ/I+bsnY3+WEYimT2bnT8f+MMMTT5/ML+0FHFFfGfAHawFH1SezmbGA4+orA34x9icalMj6rC1wdH0yuzQUcHx9phY4gT5LC5xEn50FTqPPzAIn0mdlgZPps7HA6fSZWOCE+sqAP0494KT6pn8TK62+yS9wYn1TX+Dk+mR2NeGA0+ub9AIPoG/KCzyIvun+Bh5G32QXeCB9Mv/5a+yPmoLB/vqmOR/826eC5VXB9z4V/OpQwW9eFdxxUcH9PhXcbVbBsw4VPGlTwXNeFZwyUMEZFxWcsFLB+T4VnC5VwdlmFZysV8F7HSp4q0gF77Sp4I1KFbzPq4K3yVXE+r8Mfh+bJIq+4vbLI5vE0Le8Pjs7soleXy6fTqza0+srFi9Pxv4Q46HVV1wfmf3TO9LqMx1uhUpfcWs53AqNvqXtcCvC9ZkPtyJYX/lV2Xi4FaH6jC/umjB9eU64dwTps/1VeZsQfcsbwr3HXx+Lu4W3PhZ3G199hd2bU0346WNxa3jpY3Hr+Ohjcfdw15fLZ8Kt46yPxW3CVV9xw+I24KYvL1jcRpz0sbhtuOhbEm4b/frynMVtpVdfsWBx2+nTx+J20q2P37g9dOpjcfvo0ke4vbTrY3EdaNXH4rrQpq/g5pQLzfpYXEca9RGuK036WFxn9vURrgd7+viq7ENdH0cevdjVxwEMT3b0sbi+bOtjcb3Z6GNxA8g24bK4/qz1sbhBZCyuhjt9HMAIpdLHkcdgMhZXQ1Ys/hBuMBmLq+EvhMMsCJZiTNUAAAAASUVORK5CYII=" className="sidebar-ads" />
                    <div className="sidebar-tittle">
                        <h4>conversation</h4>
                        <a href>Hide chat</a>
                    </div>
                    <div className="online-list">
                        <div className="online">
                            <img src="https://cdn.shopify.com/s/files/1/0702/0511/2635/files/mula.jpg" width="120px" />
                        </div>
                        <p> mula massi</p>
                    </div>
                    <div className="online-list">
                        <div className="online">
                            <img src="https://cdn.shopify.com/s/files/1/0702/0511/2635/files/member-3.png" />
                        </div>
                        <p> fazil nusrat</p>
                    </div>
                    <div className="online-list">
                        <div className="online">
                            <img src="https://cdn.shopify.com/s/files/1/0702/0511/2635/files/Omar_Parwani.jpg?v=1703156167" />
                        </div>
                        <p> faisal nusrat</p>
                    </div>
                </div>
            </div>
            <div className="footer">
                <p>Copyight Dec 2023 by Ahmad Masih Parwani</p>
            </div>
        </div>


    )
}

export default Crud
