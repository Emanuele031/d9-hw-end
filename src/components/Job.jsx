
import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Star, StarFill, Trash } from 'react-bootstrap-icons'
import { useSelector, useDispatch } from 'react-redux'

const Job = ({ data }) => {
  const favourites = useSelector((state) => state.favourite.list)
  const dispatch = useDispatch()

  const isFav = favourites.includes(data.company_name)

  const handleRemoveFromFavourites = () => {
    dispatch({
      type: 'REMOVE_FROM_FAVOURITE',
      payload: data.company_name,
    })
  }

  const handleAddToFavourites = () => {
    dispatch({
      type: 'ADD_TO_FAVOURITE',
      payload: data.company_name,
    })
  }

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={3}>
        
        {isFav ? (
          <StarFill
            color="gold"
            size={16}
            className="mr-2 my-auto"
            onClick={handleRemoveFromFavourites}
          />
        ) : (
          <Star
            color="gold"
            size={16}
            className="mr-2 my-auto"
            onClick={handleAddToFavourites}
          />
        )}
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={6}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={3} className="text-right">
       
        {isFav && (
          <Trash
            color="red"
            size={16}
            className="my-auto"
            onClick={handleRemoveFromFavourites}
          />
        )}
      </Col>
    </Row>
  )
}

export default Job
