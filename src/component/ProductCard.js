import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBListGroup,
  MDBListGroupItem,
  MDBContainer,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { addtoCart, searchItem, setProducts } from "../features/cartSlice";
import { useQuery } from "@tanstack/react-query";
import ProductData from "../ProductData";

const ProductCard = () => {
  
  
  const dispatch = useDispatch();
  const { data, error, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: ProductData,
    onSuccess: (data) => {
      dispatch(setProducts(data)); 
    }
  });
  const colors = [
    "All",
    ...new Set( useSelector((state) => state.allcart.items).map((item) => item.colour)
    )
  ];
  const items = useSelector((state) => state.allcart.filteredItems);
  const authenticate = useSelector((state) => state.auth.isAuthenticated);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;





  
 

  return (
    <div className="m-2">
      <div>
        <MDBDropdown>
          <MDBDropdownToggle>Select Color</MDBDropdownToggle>
          <MDBDropdownMenu>
            
            {colors.map((color) => (
              
              <MDBDropdownItem
               
                key={color}
                onClick={() => dispatch(searchItem(color === "All"? "":color))}
              >
                
                {color}
              </MDBDropdownItem>
            ))}
          </MDBDropdownMenu>
        </MDBDropdown>
      </div>
      <MDBContainer>
        <MDBRow className="mb-3">
          {/* {isLoading && <LoadingBlock />} */}
          {items.map((item) => (
            <MDBCol size="4" key={item.id}>
              <MDBCard>
                <MDBCardImage
                  src={item.img}
                  width="420px"
                  height="300"
                  justify-content-center
                />
                <MDBCardBody>
                  <MDBCardTitle>Name: {item.name}</MDBCardTitle>
                  <MDBCardText>
                    <MDBListGroup flush>
                      <MDBListGroupItem>ID: {item.id}</MDBListGroupItem>
                      <MDBListGroupItem>Price: {item.price}</MDBListGroupItem>
                      <MDBListGroupItem>Color: {item.colour}</MDBListGroupItem>
                    </MDBListGroup>
                  </MDBCardText>
                  {authenticate ? (
                    <MDBBtn href="#" onClick={() => dispatch(addtoCart(item))}>
                      Add to Cart
                    </MDBBtn>
                  ) : (
                    <MDBBtn>Add to Cart</MDBBtn>
                  )}
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default ProductCard;