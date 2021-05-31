import { PostDetailContent, SideBar } from '../../components';

const PostDetail = () => {
    return (
        <div className="container post-detail">
            <div className="row">
                <div className="col-lg-8">
                    <PostDetailContent />
                </div>
                <div className="col-lg-4">
                    <SideBar />
                </div>
            </div>
        </div>
    );
};

export default PostDetail;
