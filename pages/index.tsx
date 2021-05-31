import { PostList, SideBar } from '../components';

const Home = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <PostList />
                </div>
                <div className="col-lg-4">
                    <SideBar />
                </div>
            </div>
        </div>
    );
};

export default Home;
