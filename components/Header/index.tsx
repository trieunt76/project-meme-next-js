import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <header>
            <div className="ass1-header">
                <div className="container">
                    <Link href="/">
                        <a className="ass1-logo">
                            <div
                                data-v-3a92d042
                                draggable="true"
                                className="app-icon is-ios7 is-custom-size"
                                style={{
                                    width: '38px',
                                    height: '38px',
                                    fill: '#00afab',
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 50 50"
                                >
                                    <path d="M 25 2 C 12.308633 2 2 12.308633 2 25 C 2 37.691367 12.308633 48 25 48 C 37.691367 48 48 37.691367 48 25 C 48 12.362796 37.775013 2.1030941 25.158203 2.015625 A 1.0001 1.0001 0 0 0 25 2 z M 25 4 C 36.610633 4 46 13.389367 46 25 C 46 36.610633 36.610633 46 25 46 C 13.389367 46 4 36.610633 4 25 C 4 13.389367 13.389367 4 25 4 z M 27.947266 16.966797 A 1.0001 1.0001 0 0 0 27.199219 18.597656 C 27.199219 18.597656 29.515362 22 33 22 C 36.4839 22 38.800781 18.597656 38.800781 18.597656 A 1.0001 1.0001 0 0 0 38.035156 16.988281 A 1.0001 1.0001 0 0 0 37.199219 17.402344 C 37.199219 17.402344 35.0341 20 33 20 C 30.964638 20 28.800781 17.402344 28.800781 17.402344 A 1.0001 1.0001 0 0 0 27.947266 16.966797 z M 17 17 C 15.289221 17 13.839311 17.810882 12.810547 18.615234 C 12.296165 19.01741 11.884671 19.42257 11.585938 19.775391 C 11.436569 19.951801 11.317846 20.111026 11.214844 20.283203 C 11.163344 20.369293 11.113703 20.45491 11.066406 20.587891 C 11.019106 20.720871 10.886284 20.910111 11.070312 21.371094 A 1.0001 1.0001 0 0 0 12.974609 21.25 C 13.005029 21.20563 13.038829 21.15629 13.113281 21.068359 C 13.311297 20.834492 13.639351 20.50698 14.042969 20.191406 C 14.850205 19.560258 15.951779 19 17 19 C 19.035362 19 21.199219 21.597656 21.199219 21.597656 A 1.0001 1.0001 0 1 0 22.800781 20.402344 C 22.800781 20.402344 20.484638 17 17 17 z M 35.025391 28.996094 A 1.0001 1.0001 0 0 0 34.757812 29.029297 C 34.757812 29.0293 30.888889 30 25 30 C 19.111111 30 15.242187 29.029297 15.242188 29.029297 A 1.0004596 1.0004596 0 1 0 14.757812 30.970703 C 14.757812 30.970703 16.824118 31.473088 20.152344 31.775391 A 1.0001 1.0001 0 0 0 20.564453 31.859375 C 20.690342 31.859375 20.654483 31.839235 20.759766 31.96875 C 20.865048 32.098265 21.022464 32.417231 21.152344 32.873047 C 21.412103 33.784679 21.582773 35.181615 21.873047 36.626953 C 22.163321 38.072291 22.570258 39.59619 23.488281 40.849609 C 24.406304 42.103029 25.929033 43 27.947266 43 C 29.596334 43 30.980834 42.372577 31.947266 41.388672 C 32.913697 40.404766 33.481974 39.112578 33.761719 37.757812 C 34.209134 35.591045 33.971441 33.237012 33.109375 31.367188 C 34.387812 31.158748 35.242188 30.970703 35.242188 30.970703 A 1.0001 1.0001 0 0 0 35.025391 28.996094 z M 31.005859 31.664062 C 31.805764 33.059112 32.203972 35.410381 31.802734 37.353516 C 31.581355 38.425626 31.141709 39.35489 30.521484 39.986328 C 29.90126 40.617766 29.119697 41 27.947266 41 C 26.458498 41 25.713509 40.503487 25.101562 39.667969 C 24.489618 38.832451 24.103085 37.572334 23.833984 36.232422 C 23.564884 34.89251 23.411632 33.503477 23.076172 32.326172 C 23.039763 32.198393 22.988912 32.080898 22.947266 31.957031 C 23.604014 31.981868 24.285716 32 25 32 C 25.431557 32 25.829184 31.984151 26.240234 31.974609 C 26.515965 32.976195 27 35.002156 27 37 A 1.0001 1.0001 0 1 0 29 37 C 29 34.967701 28.59388 33.078811 28.285156 31.892578 C 29.274722 31.832126 30.200034 31.75541 31.005859 31.664062 z" />
                                </svg>
                            </div>
                            Meme
                        </a>
                    </Link>
                    <nav>
                        <ul className="ass1-header__menu">
                            <li>
                                <a href="#">Danh mục</a>
                                <div
                                    className="ass1-header__nav"
                                    style={{ display: 'none' }}
                                >
                                    <div className="container">
                                        <ul>
                                            <li>
                                                <a href="index.html">Funny</a>
                                            </li>
                                            <li>
                                                <a href="index.html">Animals</a>
                                            </li>
                                            <li>
                                                <a href="index.html">
                                                    Anime &amp; Mâng
                                                </a>
                                            </li>
                                            <li>
                                                <a href="index.html">Awesome</a>
                                            </li>
                                            <li>
                                                <a href="index.html">
                                                    Basketball
                                                </a>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <a href="index.html">Car</a>
                                            </li>
                                            <li>
                                                <a href="index.html">Comic</a>
                                            </li>
                                            <li>
                                                <a href="index.html">Cosplay</a>
                                            </li>
                                            <li>
                                                <a href="index.html">
                                                    Countryballs
                                                </a>
                                            </li>
                                            <li>
                                                <a href="index.html">
                                                    Classical Art Memes
                                                </a>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <a href="index.html">Girl</a>
                                            </li>
                                            <li>
                                                <a href="index.html">History</a>
                                            </li>
                                            <li>
                                                <a href="index.html">K-POP</a>
                                            </li>
                                            <li>
                                                <a href="index.html">V-POP</a>
                                            </li>
                                            <li>
                                                <a href="index.html">Pokémon</a>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <a href="index.html">School</a>
                                            </li>
                                            <li>
                                                <a href="index.html">
                                                    Star war
                                                </a>
                                            </li>
                                            <li>
                                                <a href="index.html">Coder</a>
                                            </li>
                                            <li>
                                                <a href="index.html">Travel</a>
                                            </li>
                                            <li>
                                                <a href="index.html">Sport</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="ass1-header__menu-transition" />
                                </div>
                            </li>
                            <li>
                                <a href="index.html">Hot</a>
                                <div
                                    className="ass1-header__nav"
                                    style={{ display: 'none' }}
                                >
                                    <div className="container">
                                        <ul>
                                            <li>
                                                <a href="index.html">Funny</a>
                                            </li>
                                            <li>
                                                <a href="index.html">Animals</a>
                                            </li>
                                            <li>
                                                <a href="index.html">
                                                    Anime &amp; Mâng
                                                </a>
                                            </li>
                                            <li>
                                                <a href="index.html">Awesome</a>
                                            </li>
                                            <li>
                                                <a href="index.html">
                                                    Basketball
                                                </a>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <a href="index.html">Car</a>
                                            </li>
                                            <li>
                                                <a href="index.html">Comic</a>
                                            </li>
                                            <li>
                                                <a href="index.html">Cosplay</a>
                                            </li>
                                            <li>
                                                <a href="index.html">
                                                    Countryballs
                                                </a>
                                            </li>
                                            <li>
                                                <a href="index.html">
                                                    Classical Art Memes
                                                </a>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <a href="index.html">Girl</a>
                                            </li>
                                            <li>
                                                <a href="index.html">History</a>
                                            </li>
                                            <li>
                                                <a href="index.html">K-POP</a>
                                            </li>
                                            <li>
                                                <a href="index.html">V-POP</a>
                                            </li>
                                            <li>
                                                <a href="index.html">Pokémon</a>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <a href="index.html">School</a>
                                            </li>
                                            <li>
                                                <a href="index.html">
                                                    Star war
                                                </a>
                                            </li>
                                            <li>
                                                <a href="index.html">Coder</a>
                                            </li>
                                            <li>
                                                <a href="index.html">Travel</a>
                                            </li>
                                            <li>
                                                <a href="index.html">Sport</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="ass1-header__menu-transition" />
                                </div>
                            </li>
                        </ul>
                    </nav>
                    <div className="ass1-header__search">
                        <form action="#">
                            <label>
                                <input
                                    type="search"
                                    name="search-text"
                                    className="form-control"
                                    placeholder="Nhập từ khóa ..."
                                />
                                <i className="icon-Search" />
                            </label>
                        </form>
                    </div>
                    <Link href="/posts/create">
                        <a
                            href="#"
                            className="ass1-header__btn-upload ass1-btn"
                        >
                            <i className="fa fa-upload" /> Upload
                        </a>
                    </Link>
                    <Link href="/login">
                        <a className="ass1-header__btn-upload ass1-btn">
                            <i className="fa fa-sign-in"></i>
                            Login
                        </a>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
