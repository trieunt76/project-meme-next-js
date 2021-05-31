import Link from 'next/link';

const PostItem = () => {
    return (
        <div className="ass1-section__item">
            <div className="ass1-section">
                <div className="ass1-section__head">
                    <Link href="/post/[id]">
                        <a className="ass1-section__avatar ass1-avatar">
                            <img src="/images/user.png" alt="" />
                        </a>
                    </Link>

                    <div>
                        <a
                            href="bai-viet-chi-tiet.html"
                            className="ass1-section__name"
                        >
                            Thanos
                        </a>
                        <span className="ass1-section__passed">
                            2 giờ trước
                        </span>
                    </div>
                </div>
                <div className="ass1-section__content">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Et inventore obcaecati eum deserunt ut, aperiam
                        quas! Placeat blanditiis consequatur, deserunt facere
                        iusto amet a ad suscipit laudantium unde quidem
                        perferendis!
                    </p>
                    <div className="ass1-section__image">
                        <a href="bai-viet-chi-tiet.html">
                            <img
                                src="/images/microphone-1209816_1920.jpg"
                                alt=""
                            />
                        </a>
                    </div>
                </div>
                <div className="ass1-section__footer">
                    <a
                        href="#"
                        className="
                                          ass1-section__btn-comment
                                          ass1-btn-icon
                                      "
                    >
                        <i className="icon-Comment_Full" />
                        <span>982</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PostItem;
