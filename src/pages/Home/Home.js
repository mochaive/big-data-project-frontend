import React, { useState, useEffect } from "react"
import axios from "axios"

import "./Home.css"

const Home = () => {
    return (
        <div className="container">
            <a className="text-info">뉴스 트렌드 분석</a>
            <div className="container-register-content-name">
                <input
                    className="input-name"
                    placeholder="키워드를 입력해주세요"
                    id="input-user-name"
                ></input>
            </div>
        </div>
    )
}

export default Home
