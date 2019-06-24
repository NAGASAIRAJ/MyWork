import unittest
import cap

class TestCap(unittest.TestCase):
	def test_one_word(self):
		t='python'
		r=cap.cap_text(t)
		self.assertEqual(r,'Python')
	def test_multiple_words(self):
		t='python master'
		r=cap.cap_text(t)
		self.assertEqual(r,'Python Master')

if __name__=='__main__':
	unittest.main()