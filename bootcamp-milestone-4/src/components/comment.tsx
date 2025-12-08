import type { Comment } from "@/database/blogSchema";
import style from "./comment.module.css";

{
  /* Modularizing code into seperate functions is useful.
		Makes your code look nicer and allows for better readability.
	*/
}
type CommentProps = {
  comment: Comment;
};

function parseCommentTime(time: string | Date) {
  const date = new Date(time);
  return date.toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

function CommentItem({ comment }: CommentProps) {
  return (
    <div className={style.comment}>
      <div className={style.header}>
        <strong className={style.user}>{comment.user}</strong>
        <span className={style.time}>{parseCommentTime(comment.time)}</span>
      </div>

      <p className={style.text}>{comment.comment}</p>
    </div>
  );
}

export default CommentItem;
