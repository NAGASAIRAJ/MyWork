import numpy as np 
import cv2

img=cv2.imread('image.jpg')
cv2.imshow('Original',img)
cv2.waitkey(0)
cv2.destroyAllWindows()