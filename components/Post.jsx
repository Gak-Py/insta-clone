import { EllipsisHorizontalIcon, HeartIcon, ChatBubbleLeftEllipsisIcon,BookmarkIcon, FaceSmileIcon } from "@heroicons/react/24/outline"
import { HeartIcon as HeartIconFill } from "@heroicons/react/24/solid"
import { addDoc, setDoc, doc, collection, onSnapshot, orderBy, query, serverTimestamp, deleteDoc } from "firebase/firestore"
import {useSession} from "next-auth/react"
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Moment from "react-moment";

export default function Post({img,userImg,caption,username,id}) {
  const {data:session} = useSession();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);
  useEffect(()=> {
    const unsubscribe = onSnapshot(
      query(collection(db, "posts", id, "comments"), orderBy("timestamp", "desc")), (snapshot)=> {setComments(snapshot.docs)}
      );
  }, [db, id]);
  useEffect(()=> {
    const unsubscribe = onSnapshot(
      collection(db, "posts", id, "likes"),
      (snapshot) => setLikes(snapshot.docs));
  }, [db, id]);
  useEffect(()=> {
    setHasLiked(
      likes.findIndex(like=> like.id === session?.user.uid) !== -1
     )
  }, [likes])
  async function likePost() {
    if (hasLiked){
      await deleteDoc(doc(db, "posts", id, "likes", session.user.uid))
    } else {
      await setDoc(doc(db, "posts", id, "likes", session.user.uid),{
      username: session.user.username,
      });
    }
  }
  async function sendComment(event) {
    event.preventDefault();
    const commentToSend = comment;
    setComment("");
    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp()
    })
  }
  return (
    <div className="bg-white my-7 border rounded-md">
      {/* POST Header */}
      <div className="flex items-center p-5">
        <img className="h-12 rounded-full object-cover border p-1 mr-3" src={userImg} alt={username} />
        <p className="text-sm font-bold flex-1">{username}</p>
        <EllipsisHorizontalIcon className="h-5" />
      </div>
      {/* POST Image  */}
      <img className="object-cover w-full" src={img} />

      {/* Post Buttons */}

      {session && (
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          {hasLiked ? (<HeartIconFill onClick={likePost} className="text-red-400 btn" />):(<HeartIcon onClick={likePost} className="btn" />)}          
          <ChatBubbleLeftEllipsisIcon className="btn" />
        </div>
        <BookmarkIcon className="btn" />
      </div>

      )}


      {/* Post Comments */}
      <p className="p-5 truncate ">
        <span className="font-bold mr-2">{username}</span>
        {caption}
      </p>

      {comments.length > 0 && (
        <div className="mx-10 max-h-24 overflow-y-scroll scrollbar-none">
          {comments.map(comment => (
            <div className="flex items-center space-x-2 mb-2">
              <img className="h-7 rounded-full object-cover" src={comment.data().userImage} />
              <p className="font-semibold ">{comment.data().username}</p>
              <p className="flex-1 truncate">{comment.data().comment}</p>
              <Moment fromNow>{comment.data().timestamp?.toDate()}</Moment>
            </div>
          ))}
        </div>
      )}

      {/* Post input box */}
      {session && (
      <form action="" className="flex items-center p-4">
        <FaceSmileIcon className="h-7" />
        <input onChange={(event)=> setComment(event.target.value)} className="border-none flex-1 focus:ring-0" type="text" placeholder="Enter your comment..." value={comment}></input>
        <button type="submit" onClick={sendComment} disabled={!comment.trim()} className="text-blue-400 font-bold disabled:text-blue-200">Post</button>
      </form>
      )}
    </div>
  )
}
