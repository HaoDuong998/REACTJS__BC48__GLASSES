import React, { Component } from 'react'

export default class BaiTapChonKinh extends Component {
    /**3 bước bắt đầu xây dựng 1 components:
     * 1.Dàn layout cho web
     * 2.xác định các dữ liệu sẽ thay đổi để bỏ dô state chứa và hiển thị
     * 3.Bắt đầu phân tích và xử lý các logic
     */

    arrItemButton = [
        {
            img: './img/g1.jpg',
            linkImg: './img/g1.jpg'
        },
        {
            img: './img/g2.jpg',
            linkImg: './img/g2.jpg'
        },
        {
            img: './img/g3.jpg',
            linkImg: './img/g3.jpg'
        },
        {
            img: './img/g4.jpg',
            linkImg: './img/g4.jpg'
        },
        {
            img: './img/g5.jpg',
            linkImg: './img/g5.jpg'
        },
        {
            img: './img/g6.jpg',
            linkImg: './img/g6.jpg'
        },
        {
            img: './img/g7.jpg',
            linkImg: './img/g7.jpg'
        },
        {
            img: './img/g8.jpg',
            linkImg: './img/g8.jpg'
        },
        {
            img: './img/g9.jpg',
            linkImg: './img/g9.jpg'
        },
    ];


    state = {
        linkImg : './img/g1.jpg',
    };


    render() {
        return (
            <div className="item__box container">
                <h1>The Glasses App</h1>
                <div className="item__all row">
                    <div className="item__top col-8">
                        <div className="item__img">
                        <img src={this.state.linkImg} alt="" />
                        </div>
                    </div>
                    <div className="item__bot col-4">

                        {this.arrItemButton.map((item, index) => {
                            //khi xử dụng map thẻ jsx lớn nhất sẽ phải chứa 1 thuộc tính gọi là key
                            const {img} = item
                            return <button key={index} 
                            onClick={() => {
                                this.setState({
                                    linkImg:img,
                                })
                            }}
                            >
                                <img width={50} height={50} src={img} alt="" />
                            </button>
                        })}
                        {/* <button>
                            <img width={50} height={50} src="./img/g2.jpg" alt="" />
                        </button>
                        <button>
                            <img width={50} height={50} src="./img/g3.jpg" alt="" />
                        </button>
                        <button>
                            <img width={50} height={50} src="./img/g4.jpg" alt="" />
                        </button>
                        <button>
                            <img width={50} height={50} src="./img/g5.jpg" alt="" />
                        </button>
                        <button>
                            <img width={50} height={50} src="./img/g6.jpg" alt="" />
                        </button>
                        <button>
                            <img width={50} height={50} src="./img/g7.jpg" alt="" />
                        </button>
                        <button>
                            <img width={50} height={50} src="./img/g8.jpg" alt="" />
                        </button>
                        <button>
                            <img width={50} height={50} src="./img/g9.jpg" alt="" />
                        </button> */}
                    </div>
                </div>
            </div>

            // <div className="row">
            //     <div className="col-8">
            //         <img src="./img/g1.jpg" alt="" />
            //     </div>
            //     <div className="col-4">
            //         <button>
            //             <img src="./img/g1.jpg" alt="" />
            //         </button>
            //     </div>
            // </div>


        )
    }
}
