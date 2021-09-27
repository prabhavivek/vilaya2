import React, { Component } from 'react'

export default class DashBoardLayout extends Component {
    render() {
        return (
            <header class="header" id="pageTop">
                <div class="color-bars">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col color-bar bg-warning d-none d-md-block"></div>
                            <div class="col color-bar bg-success d-none d-md-block"></div>
                            <div class="col color-bar bg-danger d-none d-md-block"></div>
                            <div class="col color-bar bg-info d-none d-md-block"></div>
                            <div class="col color-bar bg-purple d-none d-md-block"></div>
                            <div class="col color-bar bg-pink d-none d-md-block"></div>
                            <div class="col color-bar bg-warning"></div>
                            <div class="col color-bar bg-success"></div>
                            <div class="col color-bar bg-danger"></div>
                            <div class="col color-bar bg-info"></div>
                            <div class="col color-bar bg-purple"></div>
                            <div class="col color-bar bg-pink"></div>
                        </div>
                    </div>
                </div>
                <nav class="navbar navbar-expand-md navbar-white" style={{ opacity: 1 }}>
                    <div class="container">
                        <a class="navbar-brand" href="index.html">
                            <img class="d-inline-block" src="assets/img/logo-toys.png" alt="Kidz Store" />
                        </a>
                        <button class="navbar-toggler py-2" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i class="fa fa-bars"></i>
                        </button>

                        <div class="collapse navbar-collapse " id="navbarContent">
                            <ul class="navbar-nav ml-lg-auto ">
                                <li class="nav-item dropdown bg-warning ">
                                    <a type="button" class="nav-link ">
                                        <i class="fa fa-home nav-icon" aria-hidden="true"></i>
                                        <span>Game journey</span>
                                    </a>
                                </li>
                                <li class="nav-item dropdown bg-danger">
                                    <a type="button" class="nav-link ">
                                        <i class="fa fa-play-circle nav-icon" aria-hidden="true"></i>
                                        <span>Game Manager</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}
